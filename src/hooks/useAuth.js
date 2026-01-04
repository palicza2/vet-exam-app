import { useState, useEffect } from 'react';
import { subscribeToAuth, signIn, register, logout, configError, auth } from '../services/firebase';
import { signInWithCustomToken } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!configError);
  const [error, setError] = useState('');

  useEffect(() => {
    if (configError) return;

    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
       signInWithCustomToken(auth, __initial_auth_token)
         .catch(err => console.error("Preview auth failed", err));
    }

    const unsubscribe = subscribeToAuth((u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async (email, password) => {
    setError('');
    try {
      await signIn(email, password);
    } catch (err) {
      setError(err.message.replace('Firebase:', '').trim());
      throw err;
    }
  };

  const handleRegister = async (email, password) => {
    setError('');
    try {
      await register(email, password);
    } catch (err) {
      setError(err.message.replace('Firebase:', '').trim());
      throw err;
    }
  };

  const handleSignOut = () => {
    logout();
  };

  return { user, loading, error, setError, handleSignIn, handleRegister, handleSignOut };
};
