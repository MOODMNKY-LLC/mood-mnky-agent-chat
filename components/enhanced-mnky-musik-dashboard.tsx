'use client'

import { useEffect, useState } from 'react'
import type { Artist } from '@/types/lidarr'
import { ArtistCard } from './artist-card'
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Search, 
  Music, 
  User, 
  Album as AlbumIcon, 
  Calendar, 
  Download, 
  Settings, 
  HelpCircle, 
  List, 
  Tag, 
  RefreshCw, 
  Plus, 
  Home 
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Marquee from '@/components/ui/marquee'
import { 
  fetchArtists, 
  fetchCalendar, 
  fetchDiskSpace,
  fetchHealth, 
  fetchQueue, 
  fetchWantedAlbums 
} from '@/lib/lidarr-api'

// Type definitions
interface DiskSpace {
  path: string
  freeSpace: number
  totalSpace: number
  percentUsed: number
}

interface HealthResource {
  id: number
  source?: string
  type: string
  message?: string
  wikiUrl?: string
}

interface AlbumResource {
  id: number
  title: string
  releaseDate: string | null
  artistId: number
  foreignAlbumId: string | null
  monitored: boolean
  anyReleaseOk: boolean
  profileId: number
  duration: number
  albumType: string | null
}

interface Quality {
  id: number
  name: string
}

interface Revision {
  version: number
  real: number
  isRepack: boolean
}

interface QualityModel {
  quality: Quality
  revision: Revision
}

interface QueueItem {
  id: number
  title: string
  progress: number
  artistId?: number
  albumId?: number
  artist?: Artist
  album?: AlbumResource
  quality?: QualityModel
  protocol?: string
  downloadClient?: string
}

// Define navigation items type
type NavigationPath = '/' | '/artists' | '/albums' | '/queue' | '/calendar' | '/settings'
type ActiveSection = NavigationPath

interface NavigationItem {
  name: string
  path: NavigationPath
  icon: React.ElementType
}

// Define navigation items
const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Artists', path: '/artists', icon: User },
  { name: 'Albums', path: '/albums', icon: AlbumIcon },
  { name: 'Queue', path: '/queue', icon: Download },
  { name: 'Calendar', path: '/calendar', icon: Calendar },
  { name: 'Settings', path: '/settings', icon: Settings }
]

export function EnhancedMnkyMusikDashboard() {
  // State management
  const [artists, setArtists] = useState<Artist[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<ActiveSection>('/')
  const [upcomingReleases, setUpcomingReleases] = useState<AlbumResource[]>([])
  const [diskSpace, setDiskSpace] = useState<DiskSpace[]>([])
  const [queueItems, setQueueItems] = useState<QueueItem[]>([])
  const [healthIssues, setHealthIssues] = useState<HealthResource[]>([])
  const [wantedAlbums, setWantedAlbums] = useState<AlbumResource[]>([])

  // Data fetching
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const [
          artistsData,
          calendarData,
          diskSpaceData,
          queueData,
          healthData,
          wantedData
        ] = await Promise.all([
          fetchArtists(),
          fetchCalendar(),
          fetchDiskSpace(),
          fetchQueue(),
          fetchHealth(),
          fetchWantedAlbums()
        ])

        setArtists(Array.isArray(artistsData) ? artistsData : [])
        setUpcomingReleases(calendarData)
        setDiskSpace(diskSpaceData)
        setQueueItems(queueData)
        setHealthIssues(healthData)
        setWantedAlbums(wantedData)
      } catch (err) {
        console.error('Error loading data:', err)
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case '/':
        return (
          <div className="p-6 space-y-8">
            {/* Welcome Hero */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                Welcome to MNKY MUSIK
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Your intelligent music collection manager. MNKY MUSIK helps you organize, track, and enhance your music library with automated artist updates, release monitoring, and smart collection management.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border border-white/20 bg-black/30 backdrop-blur-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-white/70">Total Artists</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{artists.length}</div>
                </CardContent>
              </Card>
              
              <Card className="border border-white/20 bg-black/30 backdrop-blur-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-white/70">Storage Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {diskSpace[0]?.percentUsed}%
                  </div>
                  <div className="text-sm text-white/50">
                    {Math.round(diskSpace[0]?.freeSpace / 1024 / 1024 / 1024)}GB free
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-white/20 bg-black/30 backdrop-blur-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-white/70">Active Downloads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{queueItems.length}</div>
                </CardContent>
              </Card>

              <Card className="border border-white/20 bg-black/30 backdrop-blur-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-white/70">Wanted Albums</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{wantedAlbums.length}</div>
                </CardContent>
              </Card>
            </div>

            {/* System Health Alert (if issues exist) */}
            {healthIssues.length > 0 && (
              <Card className="border border-red-500/20 bg-red-500/5 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-red-400">System Health Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {healthIssues.map((issue, index) => (
                      <li key={index} className="text-red-300/70">{issue.message}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Featured Artists with 3D Marquee */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">Featured Artists</h2>
                  <div className="relative flex h-[600px] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-white/20 bg-black/30 backdrop-blur-xl">
                    <div className="flex flex-row gap-4 [perspective:300px]">
                      <Marquee
                        className="h-[500px] justify-center overflow-hidden [--duration:40s] [--gap:1rem]"
                        vertical
                        pauseOnHover
                        repeat={2}
                        style={{
                          transform: "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
                        }}
                      >
                        {artists?.slice(0, 8).map((artist) => (
                          <div key={artist.id} className="w-[280px] p-3 transition-all duration-300 hover:scale-105">
                            <ArtistCard artist={artist} />
                          </div>
                        ))}
                      </Marquee>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/80"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/80"></div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar with Upcoming & Active */}
              <div className="space-y-6">
                {/* Upcoming Releases */}
                <Card className="border border-white/20 bg-black/30 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Upcoming Releases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      {upcomingReleases.slice(0, 5).map((release) => (
                        <div key={release.id} className="flex items-center space-x-4 py-2">
                          <Calendar className="h-4 w-4 text-white/70" />
                          <div>
                            <p className="text-sm font-medium text-white">{release.title}</p>
                            <p className="text-xs text-white/70">
                              {release.releaseDate 
                                ? new Date(release.releaseDate).toLocaleDateString()
                                : 'Release date TBA'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Active Downloads */}
                <Card className="border border-white/20 bg-black/30 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Active Downloads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      {queueItems.map((item: QueueItem) => (
                        <div key={item.id} className="flex items-center space-x-4 py-2">
                          <Download className="h-4 w-4 text-white/70" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-white">{item.title}</p>
                            <div className="w-full bg-white/10 rounded-full h-2 mt-1">
                              <div 
                                className="bg-white/70 h-2 rounded-full" 
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recently Added Section */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Recently Added</h2>
              <div className="rounded-xl border border-white/20 bg-black/30 backdrop-blur-xl overflow-hidden">
                <Marquee 
                  className="py-6 px-4" 
                  pauseOnHover
                  reverse
                  repeat={2}
                >
                  {artists?.slice(-12).reverse().map((artist) => (
                    <div key={artist.id} className="w-[280px] px-3 transition-all duration-300 hover:scale-105">
                      <ArtistCard artist={artist} />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            {/* Genre Highlights */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Genre Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Rock', 'Electronic'].map((genre) => (
                  <div key={genre} className="relative h-[400px] rounded-xl border border-white/20 bg-black/30 backdrop-blur-xl overflow-hidden">
                    <h3 className="absolute top-0 left-0 right-0 p-3 text-center font-medium bg-black/90 backdrop-blur-xl z-10 border-b border-white/10 text-white">
                      {genre}
                    </h3>
                    <Marquee 
                      className="h-full py-6" 
                      vertical
                      pauseOnHover
                      repeat={2}
                    >
                      {artists
                        ?.filter(artist => artist.genres?.includes(genre))
                        .map((artist) => (
                          <div key={artist.id} className="w-full px-2 py-2">
                            <ArtistCard artist={artist} />
                          </div>
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/50"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case '/artists':
        return (
          <div className="p-6 space-y-8">
            {/* Artists Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Artists</h1>
                <p className="text-white/70">Manage and browse your artist collection</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                  <Input 
                    placeholder="Search artists..." 
                    className="pl-10 bg-black/20 border-white/10 text-white"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Artist
                </Button>
              </div>
            </div>

            {/* Artists Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {artists.map((artist) => (
                <ArtistCard 
                  key={artist.id} 
                  artist={artist}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <p className="text-sm text-white/70">
                Showing <span className="font-medium text-white">1</span> to{" "}
                <span className="font-medium text-white">20</span> of{" "}
                <span className="font-medium text-white">{artists.length}</span> artists
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="p-6">
            <Card className="border border-white/20 bg-black/30 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Coming Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">This section is under development.</p>
              </CardContent>
            </Card>
          </div>
        )
    }
  }

  return (
    <div className="relative flex h-full w-full overflow-hidden">
      {/* Background with blur */}
      <div 
        className="fixed inset-0 -z-10 bg-black/20"
        style={{
          animation: 'fadeInBackground 1.5s ease-out'
        }}
      />

      {/* Dashboard Content */}
      <div className="flex w-full animate-fadeInScale">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 backdrop-blur-2xl bg-black/30 border-r border-white/10">
          {/* Add header section */}
          <div className="p-4 border-b border-white/10">
            <h1 className="text-xl font-bold text-white tracking-tight">MNKY MUSIK</h1>
            <p className="text-sm text-white/70 mt-1">Music Collection Manager</p>
          </div>
          <ScrollArea className="h-full">
            <div className="space-y-1.5 p-4">
              {NAVIGATION_ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant={activeSection === item.path ? "secondary" : "ghost"}
                    className="w-full justify-start rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-102 hover:shadow-lg text-white"
                    onClick={() => setActiveSection(item.path)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                )
              })}
            </div>
          </ScrollArea>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <ScrollArea className="h-full">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white" />
              </div>
            ) : error ? (
              <div className="p-6">
                <Card className="border border-white/10 bg-black/50 backdrop-blur-xl rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Error Loading Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-400">{error}</p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              renderContent()
            )}
          </ScrollArea>
        </main>
      </div>
    </div>
  )
}