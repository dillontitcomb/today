import GlobalContext from '../context/global/globalContext';
import { useContext } from 'react';

export default function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a provider');
  }
  return context;
}
