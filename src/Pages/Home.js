import { useRef, useState } from 'react';
import styles from '../Home.module.css';

export const Home = ({ companyList, setCompanyList}) => {
  
  
    const company = useRef();
  
   
  
    const [select, setSelect] = useState("気になっている企業");
  
    const handleSelect = c => {
      setSelect(c.target.value);
    }
  
    const handleAppCompany = () => {
      const name = company.current.value;
      
      if(name === "") return;
  
      setCompanyList(prevList => {
        return [...prevList,{name, category:select}]
      })
      company.current.value = "";
    }

    
  
   return (
    <div className="App">
      <header>
        <h1 className={styles.headTytle}>エントリー管理</h1>
      </header>
      <div className={styles.form}>
         <input type="text" placeholder='企業名を入力' ref={company} />
      <select onChange={handleSelect} value={select}>
        <option value="気になっている">気になっている企業</option>
        <option value="選考中/応募済み">選考中/応募済み企業</option>
        <option value="不合格">不合格になった企業</option>
      </select>
      <button onClick={handleAppCompany}>企業を追加</button>
     </div>
     
      <h3 className={styles.listTytle}>企業一覧</h3>
      <div className={styles.listContainer}>
        <ul>
        {companyList.length === 0 ? (
                  <li className={styles.listLi}>登録がありません</li>
                ) : (
                  companyList.map((c, i) => (
                    <li key={i} className={styles.listLi}>{c.name}</li>
                  ))
                )}
        </ul>
      </div>
       
    </div>
  );
}