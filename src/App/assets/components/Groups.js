import React from 'react';
import '../config/config';
import axios from 'axios';
import 'babel-polyfill';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO GTB-知识点: - students和list1-6这个数据结构,可以看出来你缺乏数据结构方面的知识。建议补充一下这方面的知识。
      students: '',
      // eslint-disable-next-line react/no-unused-state
      list1: [],
      // eslint-disable-next-line react/no-unused-state
      list2: [],
      // eslint-disable-next-line react/no-unused-state
      list3: [],
      // eslint-disable-next-line react/no-unused-state
      list4: [],
      // eslint-disable-next-line react/no-unused-state
      list5: [],
      // eslint-disable-next-line react/no-unused-state
      list6: []
    };
  }
  // TODO GTB-知识点: - 生命周期函数要写到class Groups里边去
  async componentDidMount() {
    const api = 'http://localhost:8080/trainee';
    const students = await axios.get(api).then((stu) => stu.data);
    this.setState({ students });
  }


// TODO GTB-综合: - 语法错误
export default Groups;
