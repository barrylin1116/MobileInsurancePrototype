export interface RequiredDocumentsList {
    title: string;
    key: string;
    visible: boolean;
}

export interface RequiredDocumentsProps {
    requiredDocumentsList?: RequiredDocumentsList[];
}
