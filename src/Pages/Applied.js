import styles from '../Pages.module.css';


export const Applied = ({companyList}) => {
   const AppliedList = companyList.filter(c => c.category === '選考中/応募済み')
  return (
    <div>
      <h2 className={styles.pageTytle}>応募済み企業一覧</h2>
      <div className={styles.listContainer}>
        <ul>
       {AppliedList.length === 0 ? (
          <li className={styles.listLi}>登録がありません</li>
        ) : (
          AppliedList.map((c, i) => (
            <li key={i} className={styles.listLi}>{c.name}</li>
          ))
        )}
      </ul>
      </div>
      
    </div>
  )
}