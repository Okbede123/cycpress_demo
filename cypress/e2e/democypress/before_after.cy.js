describe('test before after',()=>{
  var bien;

  before(() =>{
    cy.log("before all test")
    bien = "ok"
  })

  after(() =>{
    cy.log("after ")
  })


  beforeEach(() => {
    // Code sẽ được thực hiện trước mỗi bài kiểm tra trong test suite
    // Đây là nơi bạn có thể đặt các hành động chuẩn bị trước mỗi bài kiểm tra
    cy.log('Before Each Test');
  });

  afterEach(() => {
    // Code sẽ được thực hiện sau mỗi bài kiểm tra trong test suite
    // Đây là nơi bạn có thể đặt các hành động dọn dẹp hoặc kiểm tra kết quả của từng bài kiểm tra
    cy.log('After Each Test');
  });

  it('Test Case 1', () => {
    // Code cho Test Case 1
    cy.log('Test Case 1 ' + bien);
  });

  it('Test Case 2', () => {
    // Code cho Test Case 2
    cy.log('Test Case 2');
  });

})