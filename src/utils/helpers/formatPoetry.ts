export const formatPoetry = (text: string) => {

  const result = text.split('• ').filter(Boolean).join(' \n')
  console.log(result)
  return result
}