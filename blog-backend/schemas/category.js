import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categorias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Categoria',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    })
  ]
})
