import { useRef, useState } from 'react';

export const Home = () => {
  
  
    const company = useRef();
  
    const[companyList,setCompanyList] = useState([]);
  
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

    const gotoInterested = () => {
      const interested = company.filter(c => c.cotegory === "気になっている");
      naviga
    }
  
   return (
    <div className="App">
      <header>
        <h1>エントリー管理</h1>
      </header>
      <input type="text" placeholder='企業名を入力' ref={company} />
      <select onChange={handleSelect} value={select}>
        <option value="気になっている">気になっている企業</option>
        <option value="選考中/応募済み">選考中/応募済み企業</option>
        <option value="不合格">不合格になった企業</option>
      </select>
      <button onClick={handleAppCompany}>企業を追加</button>
     
      <h3>企業一覧</h3>
       <ul>
        {companyList.map((company,index) => (
          <li key={index}>{company.name} - {company.category}</li>
        ))}
      </ul>
    </div>
  );
}