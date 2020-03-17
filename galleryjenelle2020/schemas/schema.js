// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'GalleryJenelle',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: 'Photos',
      name: 'photos',
      type: 'document',
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                            .toLowerCase()
                            .replace(/[^A-Z0-9 ]+/ig, "")
                            .replace(/\s+/g, '-')
                            .slice(0, 200)
                    }
        },          
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          title: 'Date',
          name: 'date',
          type: 'date',
        },
        {
          title: 'Awards',
          name: 'awards',
          type: 'boolean',
        },
        {
          title: 'Astro',
          name: 'astro',
          type: 'boolean',
        },
        {
          title: 'Birds',
          name: 'birds',
          type: 'boolean',
        },
        {
          title: 'Flowers',
          name: 'flowers',
          type: 'boolean',
        },
        {
          title: 'Landscapes',
          name: 'landscapes',
          type: 'boolean',
        },
        {
          title: 'Macro',
          name: 'macro',
          type: 'boolean',
        },
      ],
    },
  ]),
})
