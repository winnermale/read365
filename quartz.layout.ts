import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components SHARED ACROSS ALL PAGES
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    // Component.Explorer(),
    // Component.Graph(),
  ],
  footer: Component.Footer({
    links: {
      // Website: "https://efe.ooo",
      YouTube: "https://youtube.com/@read365org",
      Instagram: "https://instagram.com/read365org",
      Twitter: "https://twitter.com/read365org",
    },
  }),
}

// components for pages that DISPLAY A SINGLE PAGE (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    // Component.Explorer(),
    // Component.ArticleTitle(),
    // Component.ContentMeta(),
    // Component.TagList(),
    Component.RecentNotes(
      { filter: (file) => {
        // Add the tags you want to include and exclude here
        const includeTag = "day";
        const excludeTag = "template";
        const excludeTags = new Set(["template", "index"]);
        
        // Whether to keep current note or not (defaults to false as you only want to keep notes that contain your include tag but not your exclude tag)
        let shouldKeep = false;
        
        // A flag to indicate if the exclude tag is found
        let foundExcludeTag = false;
      
        // Check if the include tag is present and the exclude tag is absent in any of the frontmatter tags
        if (file.frontmatter?.tags) {
          for (const tag of file.frontmatter.tags) {
            const lowerTag = tag.toLowerCase();
            // Check if we have the tag to include
            if (lowerTag === includeTag) {
              shouldKeep = true;
            }
            // Check if we have the tag to exclude
            if (lowerTag === excludeTag) {
              foundExcludeTag = true;
              break;  // No need to check further tags since exclude tag is found
            }
            if (excludeTags.has(lowerTag)) {
              foundExcludeTag = true;
              break;
            }
          }
        }
      
        // Determine final keep status: keep only if include tag is found and exclude tag is not found
        return shouldKeep && !foundExcludeTag;
      },
      }
    ),
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
          scale: 3, // default view scale
          repelForce: 0.5, // how much nodes should repel each other
          centerForce: 0.5, // how much force to use when trying to center the nodes
          linkDistance: 20, // how long should the links be by default?
          fontSize: 0.20, // what size should the node labels be?
          opacityScale: 5, // how quickly do we fade out the labels when zooming out?
          removeTags: ["Template", "index"], // what tags to remove from the graph
          showTags: true, // whether to show tags in the graph
        },
        globalGraph: {
          drag: false,
          zoom: true,
          depth: -1,
          scale: 0.8,
          repelForce: .1,
          centerForce: 1,
          linkDistance: 20,
          fontSize: 0.2,
          opacityScale: 5,
          removeTags: ["Template", "index"], // what tags to remove from the graph
          showTags: true, // whether to show tags in the graph
        },
      }
    )),
    Component.OptinIframe(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), (Component.Graph(
    {
      localGraph: {
        drag: false, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 2, // how many hops of notes to display
        scale: 3, // default view scale
        repelForce: 0.5, // how much nodes should repel each other
        centerForce: 0.5, // how much force to use when trying to center the nodes
        linkDistance: 15, // how long should the links be by default?
        fontSize: 0.25, // what size should the node labels be?
        opacityScale: 5, // how quickly do we fade out the labels when zooming out?
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
      },
      globalGraph: {
        drag: false,
        zoom: true,
        depth: -1,
        scale: 1,
        repelForce: .1,
        centerForce: 1,
        linkDistance: 30,
        fontSize: 0.5,
        opacityScale: 5,
        removeTags: ["Day"], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
      },
    }
  )),],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [
    Component.OptinIframe(),
  ],
}