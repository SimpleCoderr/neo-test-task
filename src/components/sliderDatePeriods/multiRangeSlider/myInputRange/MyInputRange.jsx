const MyInputRange = ({inputref: ref, ...props}) => {

    return (
      <input
          type="range"
          ref={ref}
          {...props}
          className="thumb thumb--zindex-4"
        />
    )
  }
  
  export default MyInputRange
  