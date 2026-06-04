// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// تعريف القالب الصارم للمقالات (لا يقبل السيرفر أي مقال لا يحتوي على هذه البيانات)
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        category: z.string(),
        description: z.string(),
        draft: z.boolean().default(false), // للتحكم في إخفاء أو إظهار المقال
    }),
});

export const collections = {
    'blog': blogCollection,
};
