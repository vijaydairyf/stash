import theme from "../../../../theme";

const styles = {
    mainContainer: {
        flex: 1
    },
    container: {
        ...theme.backGroundColor,
        flex: 0.9
    },
    listViewContainer: {
        ...theme.backWhite,
        marginTop: 20,
        // flex:1,
        // height:400,
        // backgroundColor:'red'
    },
    filterViewContainer: {
        ...theme.backWhite,
        borderBottomWidth: 0.6,
        borderBottomColor: "#BBBBBB"
    },
    imageStyle: {
        width: 70,
        height: 70
    },
    titleStyle: {
        ...theme.text.textColor
    },
    headingStyle: {
        ...theme.headWeight
    },
    linkView: {
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    linkStyle: {
        marginVertical: 22,
        marginHorizontal: 14,
        backgroundColor: "#f0494f",
        alignSelf: "flex-end",
        justifyContent: "center",
        borderRadius: 10,
        paddingHorizontal: 7
    },
    footerViewStyle: {
        flex: 0.1
    },
    emptyMessageStyle: {
        alignSelf: "center",
        paddingVertical: 180,
        height: 80,
        width: 80
    },
    linkTextStyle: {
        color: "#ffffff",
        fontSize: 14
    },
    layoutView: {
        zIndex: 999
    }
};
export default styles;
