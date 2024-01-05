import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>This page doesn't exist... Yet.</p>
      <p>Read365.org is nurtured with care.</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
