import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>This page doesn't exist... Yet.</p>
      <p>Read365 is a knowledge garden that's being nurtured daily.</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
