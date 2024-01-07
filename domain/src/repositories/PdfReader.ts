import pdf from 'pdf-parse'

export default class PdfReader {
  async process (buffer): Promise<string> {
    const { text } = await pdf(buffer)
    return text
  }
}
