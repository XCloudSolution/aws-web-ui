import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
    };
  }

  componentDidMount() {
    fetch("http://ec2-52-90-231-205.compute-1.amazonaws.com/products")
      .then((response) => response.json())
      .then((records) => {
        this.setState({
          records: records,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.records.map((item, i) => (
                    <tr class="border-b" key={i}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
