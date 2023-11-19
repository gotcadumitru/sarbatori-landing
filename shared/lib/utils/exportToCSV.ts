export const exportToCSV = (data: string, filaName: string) => {
  const csvContent = `data:text/csv;charset=utf-8,${data}`
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.target = '_blank'
  link.setAttribute('download', filaName)
  const root = document.getElementById('carmaster-root')
  if (!root) return
  root.appendChild(link)
  link.click()
  root.removeChild(link)
}
