import { FullContainer, AuthButton } from "../styles/GlobalStyles"
import LoginButton from "../components/LoginButton"
import LogoutButton from "../components/LogoutButton"
import Profile from "../components/Profile/Profile"
import { useAuth0 } from "@auth0/auth0-react"

export default function Shop() {
  const { isLoading, error } = useAuth0()

  return (
    <FullContainer>
      <div className="flex flex-col justify-center p-20">
        <h1 className="flex justify-center text-2xl font-millerLight">SHOP</h1>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p className="text-lg">Loading...</p>}
        {!error && !isLoading && (
          <>
            <div className="flex items-center justify-center w-full">
              <AuthButton>
                <LoginButton />
                <LogoutButton />
              </AuthButton>
            </div>
            <Profile />
          </>
        )}
      </div>
    </FullContainer>
  )
}
