import styles from '../Pages.module.css';


export const Interested = ({companyList}) => {
  // console.log("companyListの中身：", companyList);
  const interestedList = companyList.filter(c => c.category === '気になっている')

  return (
    <div>
      <h2 className={styles.pageTytle}>気になっている企業一覧</h2>
      <div className={styles.listContainer}>
        <ul>
       {interestedList.length === 0 ? (
          <li className={styles.listLi}>登録がありません</li>
        ) : (
          interestedList.map((c, i) => (
            <li key={i} className={styles.listLi}>{c.name}</li>
          ))
        )}
      </ul>
      </div>
    </div>
  )
}