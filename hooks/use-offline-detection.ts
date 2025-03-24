import { useState, useEffect } from "react";
import { toast } from "sonner";

export function useOfflineDetection() {
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [hasReconnected, setHasReconnected] = useState<boolean>(false);

  useEffect(() => {
    // Initial check
    setIsOffline(!navigator.onLine);

    // Set up event listeners
    const handleOffline = () => {
      setIsOffline(true);
      toast.error(
        "You are offline. Changes will be saved when you reconnect.",
        {
          id: "offline-warning",
          duration: 5000,
        }
      );
    };

    const handleOnline = () => {
      setIsOffline(false);
      setHasReconnected(true);

      // Show reconnected toast
      toast.success("You are back online. Your changes will be saved.", {
        id: "online-notification",
        duration: 3000,
      });

      // Reset the reconnected flag after a delay
      setTimeout(() => {
        setHasReconnected(false);
      }, 5000);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return { isOffline, hasReconnected };
}
