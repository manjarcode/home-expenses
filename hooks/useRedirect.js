import {redirect} from 'next/navigation'

export default function useRedirect() {
  return function redirectTo(url) {
    return redirect(url)
  }
}
