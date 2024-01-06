export default (() => {
    function YourComponent() {
      return (
        <div>
          <br></br>
          <h2 style={{ fontSize: '20px' }}>Subscribe to Write52.</h2>
          <p>  Receive weekly letters I synthesize from the best books on business, psychology, managing teams, design, behavioral economics, communication, branding, systems thinking, learning organizations, communities, and occasionally... Fiction.</p>
          <script async data-uid="6a4d85b2f4" src="https://colossal-leader-5892.ck.page/6a4d85b2f4/index.js"></script>
        </div>
      );
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