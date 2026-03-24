// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';
import encodedConfig from '../config/supabaseConfig.json';

// 解密函数
const decode = (str) => {
    try {
        return atob(str); // 对应 Python 的 base64.b64decode
    } catch (e) {
        console.error("解密 Supabase 配置失败");
        return "";
    }
};

const supabaseUrl = decode(encodedConfig.u);
const supabaseAnonKey = decode(encodedConfig.k);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);