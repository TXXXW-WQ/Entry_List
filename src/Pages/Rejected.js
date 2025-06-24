import styles from '../Pages.module.css';


export const Rejected = ({companyList}) => {
   const RejectedList = companyList.filter(c => c.category === '不合格')
  return (
    <div>
      <h2 className={styles.pageTytle}>落選・選考辞退した企業一覧</h2>
      <div className={styles.listContainer}>
<ul>
       {RejectedList.length === 0 ? (
          <li className={styles.listLi}>登録がありません</li>
        ) : (
          RejectedList.map((c, i) => (
            <li key={i} className={styles.listLi}>{c.name}</li>
          ))
        )}
      </ul>
      </div>
      
    </div>
  )
}