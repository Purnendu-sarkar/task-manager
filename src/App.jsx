import { useAuth } from "./providers/AuthProvider";

function App() {
  const { user, signInWithGoogle, logOut, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {user ? (
        <>
          <h1 className="text-2xl font-bold text-green-500">
            Welcome, {user.displayName}!
          </h1>
          <button onClick={logOut} className="btn btn-error">
            Logout
          </button>
        </>
      ) : (
        <button onClick={signInWithGoogle} className="btn btn-primary">
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default App;
