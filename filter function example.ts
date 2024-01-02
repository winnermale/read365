filter: (file) => {
        // Add the tags you want to keep here (please lowercase your entries for this to work properly)
        const keep = new Set(["day", "custom"])
        const keep2 = new Set(["template", "custom"])
      
        // Wether to keep current note or not (defaults to false as you only want to keep notes that contain your tag)
        let shouldKeep = false
      
        // Check if tag we're looking for (keep) is contained in any of the frontmatter tags
        for (const tag of file.frontmatter?.tags!) {
          if (keep.has(tag.toLowerCase()) && !keep2.has(tag.toLowerCase())) {
            shouldKeep = true
            break
          }
        }
        return shouldKeep
      }