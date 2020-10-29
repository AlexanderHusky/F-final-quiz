import React from 'react';
import '../config/config';
import axios from 'axios';
import 'babel-polyfill';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: '',
      // eslint-disable-next-line react/no-unused-state
      list1:[],
      // eslint-disable-next-line react/no-unused-state
      list2:[],
      // eslint-disable-next-line react/no-unused-state
      list3:[],
      // eslint-disable-next-line react/no-unused-state
      list4:[],
      // eslint-disable-next-line react/no-unused-state
      list5:[],
      // eslint-disable-next-line react/no-unused-state
      list6:[]
    };
  }

  async componentDidMount() {
    const api = 'http://localhost:8080/trainee';
    const students = await axios.get(api).then((stu) => stu.data);
    this.setState({ students });
  }



export default Groups;
