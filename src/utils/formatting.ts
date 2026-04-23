const formatRupiah = (amount: number): string =>
    "Rp " + amount.toLocaleString("id-ID");

export { formatRupiah };