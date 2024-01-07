import pdf from 'pdf-parse'

export default class PdfReader {
  async process (buffer): Promise<string> {
    console.log('buffer', buffer)
    const { text } = await pdf(buffer)
    return text
  }
}
