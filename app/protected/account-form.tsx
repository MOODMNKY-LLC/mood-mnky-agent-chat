'use client'

import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import Avatar from './avatar'

interface ProfileData {
  username: string
  website: string
  avatar_url: string
}

export default function AccountForm({ user }: { user: User }) {
  const supabase = createClient()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data, error, status } = await supabase
        .from('profiles')
        .select('full_name, username, website, avatar_url')
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) throw error
      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setIsLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({ username, website, avatar_url }: ProfileData) {
    try {
      setIsLoading(true)
      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSignOut() {
    try {
      const response = await fetch('/auth/signout', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to sign out');
      }
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Error signing out!');
    }
  }

  return (
    <Card style={{ width: '100%', maxWidth: '800px' }} className="bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg text-white border-zinc-800 shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">MNKY DOJO Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-6">
          <Avatar
            uid={user?.id ?? null}
            url={avatarUrl}
            size={150}
            onUpload={(filePath) => {
              setAvatarUrl(filePath)
              updateProfile({ username: username || '', website: website || '', avatar_url: filePath })
            }}
          />
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-zinc-400">EMAIL</Label>
            <Input id="email" value={user?.email} disabled className="bg-zinc-800 bg-opacity-50 text-white border-zinc-700" />
          </div>
          <div>
            <Label htmlFor="name" className="text-zinc-400">NAME</Label>
            <Input
              id="name"
              value={fullname || ''}
              onChange={(e) => setFullname(e.target.value)}
              className="bg-zinc-800 bg-opacity-50 text-white border-zinc-700 focus:border-zinc-500"
            />
          </div>
          <div>
            <Label htmlFor="username" className="text-zinc-400">USERNAME</Label>
            <Input
              id="username"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-zinc-800 bg-opacity-50 text-white border-zinc-700 focus:border-zinc-500"
            />
          </div>
          <div>
            <Label htmlFor="website" className="text-zinc-400">WEBSITE</Label>
            <Input
              id="website"
              type="url"
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
              className="bg-zinc-800 bg-opacity-50 text-white border-zinc-700 focus:border-zinc-500"
            />
          </div>
          <Button
            onClick={() => updateProfile({ username: username || '', website: website || '', avatar_url: avatarUrl || '' })}
            disabled={isLoading}
            className="w-full bg-black bg-opacity-70 text-white border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-200"
          >
            {isLoading ? 'UPDATING...' : 'UPDATE PROFILE'}
          </Button>
          <Button
            onClick={handleSignOut}
            className="w-full bg-zinc-800 bg-opacity-50 text-white border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-200 mt-4"
          >
            SIGN OUT
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}