import { Post } from '@/types/post'

export const allPosts: Post[] = [
  {
    id: 1,
    titleKey: 'home.featured.posts.vue.title',
    excerptKey: 'home.featured.posts.vue.excerpt',
    image: 'https://picsum.photos/1200/600',
    date: 'April 27, 2024',
    categoryKey: 'home.featured.posts.vue.category',
    slug: 'getting-started-with-vue-3',
    tags: ['Vue', 'Frontend', 'JavaScript']
  },
  {
    id: 2,
    titleKey: 'home.featured.posts.typescript.title',
    excerptKey: 'home.featured.posts.typescript.excerpt',
    image: 'https://picsum.photos/1200/601',
    date: 'April 26, 2024',
    categoryKey: 'home.featured.posts.typescript.category',
    slug: 'typescript-best-practices',
    tags: ['TypeScript', 'JavaScript', 'Development']
  },
  {
    id: 3,
    titleKey: 'home.featured.posts.webdev.title',
    excerptKey: 'home.featured.posts.webdev.excerpt',
    image: 'https://picsum.photos/1200/602',
    date: 'April 25, 2024',
    categoryKey: 'home.featured.posts.webdev.category',
    slug: 'modern-web-development',
    tags: ['Web Development', 'Frontend', 'Design']
  },
  {
    id: 4,
    titleKey: 'posts.react.title',
    excerptKey: 'posts.react.excerpt',
    image: 'https://picsum.photos/1200/603',
    date: 'April 24, 2024',
    categoryKey: 'posts.react.category',
    slug: 'react-hooks-advanced-guide',
    tags: ['React', 'Frontend', 'JavaScript']
  },
  {
    id: 5,
    titleKey: 'posts.css.title',
    excerptKey: 'posts.css.excerpt',
    image: 'https://picsum.photos/1200/604',
    date: 'April 23, 2024',
    categoryKey: 'posts.css.category',
    slug: 'css-grid-and-flexbox-mastery',
    tags: ['CSS', 'Frontend', 'Design']
  }
]

export const postContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
  "Suspendisse potenti. Etiam euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
  "Phasellus euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
  "Maecenas euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
  "Curabitur euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl."
] 