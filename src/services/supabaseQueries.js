import { supabase } from '../components/supabaseClient';
import { EXCLUDED_TAGS } from '../config/galleryExcludedTags';

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
const isExcluded = (tag) => EXCLUDED_TAGS.has(tag);

/* ─────────────────────────────────────────────
   Gallery (photos)
───────────────────────────────────────────── */

/**
 * 获取所有 tag，按最近上传时间排序
 */
export async function fetchTags() {
  const { data, error } = await supabase
    .from('photos')
    .select('tag, created_at')
    .order('created_at', { ascending: false });

  if (error || !data) return [];

  const seen = new Set();
  const ordered = [];
  for (const item of data) {
    if (item.tag && !isExcluded(item.tag) && !seen.has(item.tag)) {
      seen.add(item.tag);
      ordered.push(item.tag);
    }
  }
  return ordered;
}

/**
 * 按分类获取图片
 * @param {string|null} category - 分类名，null 表示全部
 */
export async function fetchImages(category = null) {
  let query = supabase
    .from('photos')
    .select('*')
    .order('created_at', { ascending: false });

  if (category) query = query.eq('tag', category);

  const { data, error } = await query;
  if (error || !data) return [];

  return data.filter((img) => !isExcluded(img.tag));
}

/**
 * 获取首页预览图片（随机取 4 张）
 */
export async function fetchPreviewImages(limit = 4) {
  const { data, error } = await supabase
    .from('photos')
    .select('url, name, tag')
    .order('created_at', { ascending: false })
    .limit(60);

  if (error || !data) return [];

  const filtered = data.filter((img) => !isExcluded(img.tag));
  return filtered.sort(() => 0.5 - Math.random()).slice(0, limit);
}

/* ─────────────────────────────────────────────
   Blog (posts)
───────────────────────────────────────────── */

/**
 * 获取所有博客文章
 */
export async function fetchPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('date', { ascending: false });

  if (error || !data) return [];
  return data;
}

/* ─────────────────────────────────────────────
   Project pages
───────────────────────────────────────────── */

/**
 * 按 tag 获取项目图片（用于 F1InSchools 等子页面）
 * @param {string} tag - 图片标签
 */
export async function fetchProjectImages(tag) {
  const { data, error } = await supabase
    .from('photos')
    .select('id, name, tag, url, created_at')
    .eq('tag', tag)
    .order('created_at', { ascending: false });

  if (error || !data) return [];
  return data;
}
