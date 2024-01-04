export default (() => {
    function YourComponent() {
      return <script async data-uid="6a4d85b2f4" src="https://colossal-leader-5892.ck.page/6a4d85b2f4/index.js"></script>
    }
   
    YourComponent.beforeDOM = `
    console.log("hello from before the page loads!")
    `
   
    YourComponent.afterDOM = `
    document.getElementById('btn').onclick = () => {
      alert('button clicked!')
    }
    `
    return YourComponent
  }) satisfies QuartzComponentConstructor