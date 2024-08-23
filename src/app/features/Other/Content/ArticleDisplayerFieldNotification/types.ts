
export interface ArticleDisplayerFieldProps {
  name: string;
  title: string;
  scrollbar?: boolean;
  dangerouslySetInnerHTML?: {__html: string} | undefined
}
