// Display – màn hình máy tính: nhận biểu thức / kết quả hiện tại
// qua props và hiển thị lên giao diện
export default function Display({ expression }) {
  return (
    <div className="display">
      <span className="display-text">
        {expression === "" ? "0" : expression}
      </span>
    </div>
  );
}
