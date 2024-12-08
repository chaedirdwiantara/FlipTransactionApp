import {Transactions} from '../interface/transaction.interface';

export const filterTransactionsBySearch = (
  transactionIds: Transactions[],
  searchState: string
): Transactions[] => {
  const searchText = searchState.toLowerCase();
  return transactionIds.filter(transaction => {
    const nameMatch = transaction?.beneficiary_name
      ?.toString()
      .toLowerCase()
      .includes(searchText);
    const senderBankMatch = transaction?.sender_bank
      ?.toString()
      .toLowerCase()
      .includes(searchText);
    const beneficiaryBankMatch = transaction?.beneficiary_bank
      ?.toString()
      .toLowerCase()
      .includes(searchText);
    const amountMatch = transaction?.amount
      ?.toString()
      .toLowerCase()
      .includes(searchText);
    return (
      nameMatch || senderBankMatch || beneficiaryBankMatch || amountMatch
    );
  });
};