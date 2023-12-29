import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    // Component.Explorer(),
    // Component.Graph(),
  ],
  footer: Component.Footer({
    links: {
      // Website: "https://efe.ooo",
      Instagram: "https://instagram.com/winnermale",
      Twitter: "https://twitter.com/winnermale",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    // Component.ArticleTitle(),
    // Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.Explorer(),
    // Component.Backlinks(),
    (Component.Graph(
      {
        localGraph: {
          drag: false, // whether to allow panning the view around
          zoom: true, // whether to allow zooming in and out
          depth: 1, // how many hops of notes to display
          scale: 4, // default view scale
          repelForce: 0.5, // how much nodes should repel each other
          centerForce: 1, // how much force to use when trying to center the nodes
          linkDistance: 15, // how long should the links be by default?
          fontSize: 0.2, // what size should the node labels be?
          opacityScale: 5, // how quickly do we fade out the labels when zooming out?
          removeTags: [], // what tags to remove from the graph
          showTags: true, // whether to show tags in the graph
        },
        globalGraph: {
          drag: true,
          zoom: true,
          depth: -1,
          scale: 3,
          repelForce: 0.05,
          centerForce: 1,
          linkDistance: 30,
          fontSize: 0.4,
          opacityScale: 3,
          removeTags: [], // what tags to remove from the graph
          showTags: true, // whether to show tags in the graph
        },
      }
    )),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}