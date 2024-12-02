import { useEffect } from "preact/hooks";

export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden"; // Bloquea el scroll
    } else {
      document.body.style.overflow = ""; // Restaura el scroll
    }

    return () => {
      document.body.style.overflow = ""; // Limpieza
    };
  }, [isLocked]);
}
