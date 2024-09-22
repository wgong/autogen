"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5823],{19163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var c=t(85893),s=t(11151);const l={sidebar_label:"base",title:"agentchat.contrib.vectordb.base"},o=void 0,i={id:"reference/agentchat/contrib/vectordb/base",title:"agentchat.contrib.vectordb.base",description:"ItemID",source:"@site/docs/reference/agentchat/contrib/vectordb/base.md",sourceDirName:"reference/agentchat/contrib/vectordb",slug:"/reference/agentchat/contrib/vectordb/base",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/base",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/vectordb/base.md",tags:[],version:"current",frontMatter:{sidebar_label:"base",title:"agentchat.contrib.vectordb.base"},sidebar:"referenceSideBar",previous:{title:"graph_rag_capability",permalink:"/autogen/docs/reference/agentchat/contrib/graph_rag/graph_rag_capability"},next:{title:"chromadb",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/chromadb"}},r={},d=[{value:"ItemID",id:"itemid",level:4},{value:"Document",id:"document",level:2},{value:"VectorDB",id:"vectordb",level:2},{value:"create_collection",id:"create_collection",level:3},{value:"get_collection",id:"get_collection",level:3},{value:"delete_collection",id:"delete_collection",level:3},{value:"insert_docs",id:"insert_docs",level:3},{value:"update_docs",id:"update_docs",level:3},{value:"delete_docs",id:"delete_docs",level:3},{value:"retrieve_docs",id:"retrieve_docs",level:3},{value:"get_docs_by_ids",id:"get_docs_by_ids",level:3},{value:"VectorDBFactory",id:"vectordbfactory",level:2},{value:"create_vector_db",id:"create_vector_db",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h4,{id:"itemid",children:"ItemID"}),"\n",(0,c.jsx)(n.p,{children:"chromadb doesn't support int ids, VikingDB does"}),"\n",(0,c.jsx)(n.h2,{id:"document",children:"Document"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"class Document(TypedDict)\n"})}),"\n",(0,c.jsx)(n.p,{children:"A Document is a record in the vector database."}),"\n",(0,c.jsx)(n.p,{children:"id: ItemID | the unique identifier of the document.\ncontent: str | the text content of the chunk.\nmetadata: Metadata, Optional | contains additional information about the document such as source, date, etc.\nembedding: Vector, Optional | the vector representation of the content."}),"\n",(0,c.jsx)(n.h2,{id:"vectordb",children:"VectorDB"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"@runtime_checkable\nclass VectorDB(Protocol)\n"})}),"\n",(0,c.jsx)(n.p,{children:"Abstract class for vector database. A vector database is responsible for storing and retrieving documents."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"active_collection"})," - Any | The active collection in the vector database. Make get_collection faster. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"type"}),' - str | The type of the vector database, chroma, pgvector, etc. Default is "".']}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Methods"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"create_collection"})," - Callable[[str, bool, bool], Any] | Create a collection in the vector database."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"get_collection"})," - Callable[[str], Any] | Get the collection from the vector database."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"delete_collection"})," - Callable[[str], Any] | Delete the collection from the vector database."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"insert_docs"})," - Callable[[List[Document], str, bool], None] | Insert documents into the collection of the vector database."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"update_docs"})," - Callable[[List[Document], str], None] | Update documents in the collection of the vector database."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"delete_docs"})," - Callable[[List[ItemID], str], None] | Delete documents from the collection of the vector database."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"retrieve_docs"})," - Callable[[List[str], str, int, float], QueryResults] | Retrieve documents from the collection of the vector database based on the queries."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"get_docs_by_ids"})," - Callable[[List[ItemID], str], List[Document]] | Retrieve documents from the collection of the vector database based on the ids."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"create_collection",children:"create_collection"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def create_collection(collection_name: str,\n                      overwrite: bool = False,\n                      get_or_create: bool = True) -> Any\n"})}),"\n",(0,c.jsx)(n.p,{children:"Create a collection in the vector database.\nCase 1. if the collection does not exist, create the collection.\nCase 2. the collection exists, if overwrite is True, it will overwrite the collection.\nCase 3. the collection exists and overwrite is False, if get_or_create is True, it will get the collection,\notherwise it raise a ValueError."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"overwrite"})," - bool | Whether to overwrite the collection if it exists. Default is False."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"get_or_create"})," - bool | Whether to get the collection if it exists. Default is True."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"Any | The collection object."}),"\n",(0,c.jsx)(n.h3,{id:"get_collection",children:"get_collection"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def get_collection(collection_name: str = None) -> Any\n"})}),"\n",(0,c.jsx)(n.p,{children:"Get the collection from the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None. If None, return the\ncurrent active collection."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"Any | The collection object."}),"\n",(0,c.jsx)(n.h3,{id:"delete_collection",children:"delete_collection"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def delete_collection(collection_name: str) -> Any\n"})}),"\n",(0,c.jsx)(n.p,{children:"Delete the collection from the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"Any"}),"\n",(0,c.jsx)(n.h3,{id:"insert_docs",children:"insert_docs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def insert_docs(docs: List[Document],\n                collection_name: str = None,\n                upsert: bool = False,\n                **kwargs) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Insert documents into the collection of the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"docs"})," - List[Document] | A list of documents. Each document is a TypedDict ",(0,c.jsx)(n.code,{children:"Document"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"upsert"})," - bool | Whether to update the document if it exists. Default is False."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"None"}),"\n",(0,c.jsx)(n.h3,{id:"update_docs",children:"update_docs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def update_docs(docs: List[Document],\n                collection_name: str = None,\n                **kwargs) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Update documents in the collection of the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"docs"})," - List[Document] | A list of documents."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"None"}),"\n",(0,c.jsx)(n.h3,{id:"delete_docs",children:"delete_docs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def delete_docs(ids: List[ItemID],\n                collection_name: str = None,\n                **kwargs) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Delete documents from the collection of the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. Each id is a typed ",(0,c.jsx)(n.code,{children:"ItemID"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"None"}),"\n",(0,c.jsx)(n.h3,{id:"retrieve_docs",children:"retrieve_docs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def retrieve_docs(queries: List[str],\n                  collection_name: str = None,\n                  n_results: int = 10,\n                  distance_threshold: float = -1,\n                  **kwargs) -> QueryResults\n"})}),"\n",(0,c.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the queries."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"queries"})," - List[str] | A list of queries. Each query is a string."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"n_results"})," - int | The number of relevant documents to return. Default is 10."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"distance_threshold"})," - float | The threshold for the distance score, only distance smaller than it will be\nreturned. Don't filter with it if < 0. Default is -1."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"QueryResults | The query results. Each query result is a list of list of tuples containing the document and\nthe distance."}),"\n",(0,c.jsx)(n.h3,{id:"get_docs_by_ids",children:"get_docs_by_ids"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def get_docs_by_ids(ids: List[ItemID] = None,\n                    collection_name: str = None,\n                    include=None,\n                    **kwargs) -> List[Document]\n"})}),"\n",(0,c.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the ids."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. If None, will return all the documents. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"include"}),' - List[str] | The fields to include. Default is None.\nIf None, will include ["metadatas", "documents"], ids will always be included. This may differ\ndepending on the implementation.']}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"List[Document] | The results."}),"\n",(0,c.jsx)(n.h2,{id:"vectordbfactory",children:"VectorDBFactory"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"class VectorDBFactory()\n"})}),"\n",(0,c.jsx)(n.p,{children:"Factory class for creating vector databases."}),"\n",(0,c.jsx)(n.h3,{id:"create_vector_db",children:"create_vector_db"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"@staticmethod\ndef create_vector_db(db_type: str, **kwargs) -> VectorDB\n"})}),"\n",(0,c.jsx)(n.p,{children:"Create a vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"db_type"})," - str | The type of the vector database."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - Dict | The keyword arguments for initializing the vector database."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"VectorDB | The vector database."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var c=t(67294);const s={},l=c.createContext(s);function o(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);