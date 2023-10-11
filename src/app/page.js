'use client'
import useUser from "@/_hooks/useUser"
import Link from "next/link"

export default function Home() {
  const { user, isLoading } = useUser()
  if (isLoading) return
  return (
    <>
      <main>
        <nav>
          <ul>
            <li>
              <Link href="/auth">Auth</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link href="/signup">Sign up</Link>
                </li>
                <li>
                  <Link href="/login">Log in</Link>
                </li>
              </>
            )}

          </ul>
        </nav>

      </main>

    </>
  )
}
