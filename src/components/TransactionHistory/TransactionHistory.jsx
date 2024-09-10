import styles from './TransactionHistory.module.css';

function capitalizeFirstLetter(string) {
  if (!string) return string;
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

export default function TransactionHistory({ items }) {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => ( 
                    <tr key={id}>
                        <td>{capitalizeFirstLetter(type)}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}