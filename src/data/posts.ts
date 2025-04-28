import { Post, PostContentBlock } from '@/types/post'

export const allPosts: Post[] = [
  {
    id: 1,
    titleKey: 'home.featured.posts.vue.title',
    excerptKey: 'home.featured.posts.vue.excerpt',
    image: '/images/vue3-tutorial.jpg',
    date: 'April 27, 2024',
    categoryKey: 'home.featured.posts.vue.category',
    slug: 'getting-started-with-vue-3',
    tags: ['Vue', 'Frontend', 'JavaScript'],
    content: [
      {
        type: 'text',
        content: 'Vue 3 introduces the Composition API, a new way to organize and reuse code in Vue applications. This article will guide you through the basics of Vue 3 and its Composition API.'
      },
      {
        type: 'image',
        content: '/images/vue3-composition.jpg',
        caption: 'Vue 3 Composition API Example',
        alt: 'Code example showing Vue 3 Composition API usage'
      },
      {
        type: 'text',
        content: 'The Composition API provides a more flexible way to organize component logic. It allows you to group related functionality together and reuse it across components.'
      }
    ]
  },
  {
    id: 2,
    titleKey: 'home.featured.posts.typescript.title',
    excerptKey: 'home.featured.posts.typescript.excerpt',
    image: 'https://picsum.photos/1200/601',
    date: 'April 26, 2024',
    categoryKey: 'home.featured.posts.typescript.category',
    slug: 'typescript-best-practices',
    tags: ['TypeScript', 'JavaScript', 'Development'],
    content: [
      {
        type: 'text',
        content: 'TypeScript has become an essential tool in modern web development. This guide covers best practices for writing clean and maintainable TypeScript code.'
      },
      {
        type: 'image',
        content: '/images/typescript-types.jpg',
        caption: 'TypeScript Type System Overview',
        alt: 'Diagram showing TypeScript type system'
      },
      {
        type: 'text',
        content: 'Understanding TypeScript\'s type system is crucial for writing robust applications. Let\'s explore some common patterns and best practices.'
      }
    ]
  },
  {
    id: 3,
    titleKey: 'home.featured.posts.webdev.title',
    excerptKey: 'home.featured.posts.webdev.excerpt',
    image: 'https://picsum.photos/1200/602',
    date: 'April 25, 2024',
    categoryKey: 'home.featured.posts.webdev.category',
    slug: 'modern-web-development',
    tags: ['Web Development', 'Frontend', 'Design'],
    content: [
      {
        type: 'text',
        content: 'Modern web development has evolved significantly. This article explores the latest trends and tools shaping the future of web development.'
      },
      {
        type: 'image',
        content: '/images/webdev-tools.jpg',
        caption: 'Modern Web Development Stack',
        alt: 'Overview of modern web development tools and technologies'
      },
      {
        type: 'text',
        content: 'From build tools to frameworks, understanding the modern web development ecosystem is essential for staying current in the industry.'
      }
    ]
  },
  {
    id: 4,
    titleKey: 'posts.react.title',
    excerptKey: 'posts.react.excerpt',
    image: 'https://picsum.photos/1200/603',
    date: 'April 24, 2024',
    categoryKey: 'posts.react.category',
    slug: 'react-hooks-advanced-guide',
    tags: ['React', 'Frontend', 'JavaScript'],
    content: [
      {
        type: 'text',
        content: 'React Hooks have revolutionized how we write React components. This advanced guide dives deep into custom hooks and advanced patterns.'
      },
      {
        type: 'image',
        content: '/images/react-hooks.jpg',
        caption: 'React Hooks Architecture',
        alt: 'Diagram showing React Hooks architecture'
      },
      {
        type: 'text',
        content: 'Understanding the internals of React Hooks and how to create custom hooks can significantly improve your React applications.'
      }
    ]
  },
  {
    id: 5,
    titleKey: 'posts.css.title',
    excerptKey: 'posts.css.excerpt',
    image: 'https://picsum.photos/1200/604',
    date: 'April 23, 2024',
    categoryKey: 'posts.css.category',
    slug: 'css-grid-and-flexbox-mastery',
    tags: ['CSS', 'Frontend', 'Design'],
    content: [
      {
        type: 'text',
        content: 'CSS Grid and Flexbox are powerful layout tools that have transformed web design. Learn how to master these technologies for modern layouts.'
      },
      {
        type: 'image',
        content: '/images/css-layout.jpg',
        caption: 'CSS Grid vs Flexbox',
        alt: 'Comparison of CSS Grid and Flexbox layouts'
      },
      {
        type: 'text',
        content: 'Understanding when to use Grid versus Flexbox is crucial for creating responsive and maintainable layouts.'
      }
    ]
  }
]

export const postContent: PostContentBlock[] = [
  {
    type: 'text',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.'
  },
  {
    type: 'image',
    content: '/images/vue3-tutorial-detail.jpg',
    caption: 'Vue 3 Composition API Example',
    alt: 'Code example showing Vue 3 Composition API usage'
  },
  {
    type: 'text',
    content: 'Suspendisse potenti. Etiam euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.'
  },
  {
    type: 'image',
    content: '/images/vue3-components.jpg',
    caption: 'Vue 3 Component Structure',
    alt: 'Diagram showing Vue 3 component structure'
  },
  {
    type: 'text',
    content: 'Phasellus euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.'
  }
] 