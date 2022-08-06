const Item = (props) => {
  let course = props.course;
  return (
    <>
      <tr key={course.id}>
        <td>{course.id}</td>
        <td>{course.code}</td>
        <td>{course.day}</td>
        <td>{course.time}</td>
        <td>{course.section}</td>
        <td>{course.shift}</td>
        <td>room no</td>
      </tr>
    </>
  );
};

export default Item;
