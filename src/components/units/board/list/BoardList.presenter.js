export default function BoardListUI(props) {
  return (
    <>
      <table>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>날짜</th>
        <tr>
          <td>a</td>
        </tr>
        <tr>
          <td>b</td>
        </tr>
        <tr>
          <td>c</td>
        </tr>
        <tr>
          <td>d</td>
        </tr>
      </table>
    </>

    // { props.data?.fetchBoards?.map(el)=> (
    //     <tr>
    //     <td>{el.number}</td>
    //     </tr>
    //     <tr>
    //     <td>{el.title}</td>
    //     </tr>
    //     <tr>
    //     <td>{el.writer}</td>
    //     </tr>
    //     <tr>
    //     <td>{el.createdAt}</td>
    //     </tr>
    // )}

    // <Wrapper>
    //   <TableTop />
    //   <Row>
    //     <ColumnHeaderBasic>ID</ColumnHeaderBasic>
    //     <ColumnHeaderTitle>제목</ColumnHeaderTitle>
    //     <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
    //     <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
    //   </Row>
    //   {props.data?.fetchBoards.map(el) => {
    //     <Row key={el._id}>
    //       <ColumnBasic>{el._id}</ColumnBasic>
    //       <ColumnTitle>{el.title}</ColumnTitle>
    //       <ColumnBasic>{el.writer}</ColumnBasic>
    //       <ColumnBasic>{el.createdAt}</ColumnBasic>
    //     </Row>
    //   }}
    //   <TableBottom />
    //   <Footer>
    //     <Button>게시물 등록하기</Button>
    //   </Footer>
    // </Wrapper>
  )
}
