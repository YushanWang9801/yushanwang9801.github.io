const firebase = require('firebase/compat/app');
require('firebase/compat/firestore');
require('firebase/compat/storage');

const firebaseConfig = {
  apiKey: "AIzaSyBmanUTKh-TRQ2FRS7EZKdw0tL9fz2Y67M",
  authDomain: "portfolio-d5d1f.firebaseapp.com",
  projectId: "portfolio-d5d1f",
  storageBucket: "portfolio-d5d1f.appspot.com",
  messagingSenderId: "975802359554",
  appId: "1:975802359554:web:aa4133ef817d1be5ddac1b"
};

// 初始化Firebase
const app = firebase.initializeApp(firebaseConfig);
const projectFirestore = app.firestore();
const projectStorage = app.storage();

// 配置Firestore设置
projectFirestore.settings({
  experimentalForceLongPolling: true, // 针对某些网络环境
  timeout: 30000 // 30秒超时
});

async function getAllItemsFromCollection(collectionName) {
  try {
    console.log(`正在从${collectionName}集合获取数据...`);
    const snapshot = await projectFirestore.collection(collectionName).onSnapShot();
    
    if (snapshot.empty) {
      console.log('集合中没有文档');
      return [];
    }
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('获取数据失败:', error.code || error.message);
    
    // 尝试从缓存获取
    try {
      const cached = await projectFirestore.collection(collectionName)
        .get({ source: 'cache' });
      console.log('从缓存获取数据');
      return cached.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (cacheError) {
      console.error('缓存中也无数据:', cacheError);
      throw error;
    }
  }
}

// 使用示例
(async () => {
  try {
    const images = await getAllItemsFromCollection('images');
    console.log('获取成功，文档数量:', images.length);
    console.log('示例文档:', images[0] || '无数据');
  } catch (error) {
    console.error('最终错误:', error);
    process.exit(1); // 非正常退出
  }
})();