import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


function ChatPersons(){
    const persons=[
        {
            phoneNo:'1',
            Fname:'Dipak',
            Lname:'Paul',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/415295281_741459804550202_5291537280275472324_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xGn1eJfvv8EQ7kNvgEkmBBp&_nc_ht=scontent.fccu20-1.fna&oh=00_AYCBUOxN_NeBJMOGHErcweCfbA7ARaaDIId4pD7YVhWvCw&oe=66461CBB',


        },
        {
            phoneNo:'2',
            Fname:'Sumanta',
            Lname:'Paul',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/380735851_838777007940632_1481118797382328397_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wKeMyws_V40Q7kNvgFTnhEw&_nc_ht=scontent.fccu20-1.fna&oh=00_AYDjJoa0k20xxNRuZjYUyHFEYLg8znRBUVulCEZaZVa2qQ&oe=664623ED',


        },
        {
            phoneNo:'3',
            Fname:'Saikat',
            Lname:'Saha',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/440945813_1870556680046356_8671005209030966916_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f2pmMHwHbfAQ7kNvgHfB-oW&_nc_ht=scontent.fccu20-1.fna&oh=00_AYCUN_YYIyBK45PgX_DiBEmFYZM3DBg8N-QdbLAEMzQxXw&oe=66461A0E',


        },
        {
            phoneNo:'4',
            Fname:'Sondeep',
            Lname:'Paul',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/363359950_649840757062064_111911846355790326_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CPqjc3atvCEQ7kNvgF8yvN0&_nc_ht=scontent.fccu20-1.fna&oh=00_AYAYquI3YtPz91vIaVL50MQoUUlR8QwdCQDrJJoH51EX8A&oe=66462DA4',


        },
        {
            phoneNo:'5',
            Fname:'Pratiksha',
            Lname:'Bhowal',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/399055601_363464559453106_1996885961077875178_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=towij7nMJogQ7kNvgFaleJn&_nc_ht=scontent.fccu20-1.fna&oh=00_AYAzFIxcArO4vyoKYRYthRUL-CSQOlRR40MZCMOE-l4bOw&oe=6646273C',


        },
        {
            phoneNo:'6',
            Fname:'Ruma',
            Lname:'Das',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/376705156_834817021354199_8069170911747318019_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JWqjJmu9xloQ7kNvgHn7fB0&_nc_ht=scontent.fccu20-1.fna&oh=00_AYB8Wrr_h6IkCIzyhgbQTN6wI_L8No1zvSrr7kKcOMkirg&oe=66462A52',


        },
        {
            phoneNo:'7',
            Fname:'Krishna',
            Lname:'Paul',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/381457048_655883826608872_4637250621651809186_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0ivhaWymLBYQ7kNvgFN4X__&_nc_ht=scontent.fccu20-1.fna&oh=00_AYAt771oOoVkUzX6Ru88moCyNEEy1fyDo90KztJkHU5mrQ&oe=66462787',


        },
        {
            phoneNo:'8',
            Fname:'Gourango',
            Lname:'Mondal',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/419244853_1493644214699290_610389472744137976_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1rQXa02_tX8Q7kNvgHA5v0A&_nc_ht=scontent.fccu20-1.fna&oh=00_AYDMRmljHffcIMr7e0W6ABggGG3SiEJ71SoVWUn1WvlrtQ&oe=664634D6',


        },
    ]
    const personsChat=[
        {
            phoneNo:'1',
            Fname:'Dipak',
            Lname:'Paul',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/415295281_741459804550202_5291537280275472324_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xGn1eJfvv8EQ7kNvgEkmBBp&_nc_ht=scontent.fccu20-1.fna&oh=00_AYCBUOxN_NeBJMOGHErcweCfbA7ARaaDIId4pD7YVhWvCw&oe=66461CBB',
            lastMsg:'You: Ami valo tui kmon achhis'

        },
        {
            phoneNo:'2',
            Fname:'Sumanta',
            Lname:'Paul',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/380735851_838777007940632_1481118797382328397_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wKeMyws_V40Q7kNvgFTnhEw&_nc_ht=scontent.fccu20-1.fna&oh=00_AYDjJoa0k20xxNRuZjYUyHFEYLg8znRBUVulCEZaZVa2qQ&oe=664623ED',
            lastMsg:'Hmmm'


        },
        {
            phoneNo:'3',
            Fname:'Saikat',
            Lname:'Saha',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/440945813_1870556680046356_8671005209030966916_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f2pmMHwHbfAQ7kNvgHfB-oW&_nc_ht=scontent.fccu20-1.fna&oh=00_AYCUN_YYIyBK45PgX_DiBEmFYZM3DBg8N-QdbLAEMzQxXw&oe=66461A0E',
            lastMsg:'You: Na re vai'


        },
        {
            phoneNo:'4',
            Fname:'Sondeep',
            Lname:'Paul',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/363359950_649840757062064_111911846355790326_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CPqjc3atvCEQ7kNvgF8yvN0&_nc_ht=scontent.fccu20-1.fna&oh=00_AYAYquI3YtPz91vIaVL50MQoUUlR8QwdCQDrJJoH51EX8A&oe=66462DA4',
            lastMsg:'Ha thik achhe'


        },
        {
            phoneNo:'5',
            Fname:'Pratiksha',
            Lname:'Bhowal',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/399055601_363464559453106_1996885961077875178_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=towij7nMJogQ7kNvgFaleJn&_nc_ht=scontent.fccu20-1.fna&oh=00_AYAzFIxcArO4vyoKYRYthRUL-CSQOlRR40MZCMOE-l4bOw&oe=6646273C',
            lastMsg:'You: Ei toh cholchee'


        },
        {
            phoneNo:'6',
            Fname:'Ruma',
            Lname:'Das',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/376705156_834817021354199_8069170911747318019_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JWqjJmu9xloQ7kNvgHn7fB0&_nc_ht=scontent.fccu20-1.fna&oh=00_AYB8Wrr_h6IkCIzyhgbQTN6wI_L8No1zvSrr7kKcOMkirg&oe=66462A52',
            lastMsg:'Ki holo'


        },
        {
            phoneNo:'7',
            Fname:'Krishna',
            Lname:'Paul',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/381457048_655883826608872_4637250621651809186_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0ivhaWymLBYQ7kNvgFN4X__&_nc_ht=scontent.fccu20-1.fna&oh=00_AYAt771oOoVkUzX6Ru88moCyNEEy1fyDo90KztJkHU5mrQ&oe=66462787',
            lastMsg:'You: Abey Ch*****ye'


        },
        {
            phoneNo:'8',
            Fname:'Gourango',
            Lname:'Mondal',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/419244853_1493644214699290_610389472744137976_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1rQXa02_tX8Q7kNvgHA5v0A&_nc_ht=scontent.fccu20-1.fna&oh=00_AYDMRmljHffcIMr7e0W6ABggGG3SiEJ71SoVWUn1WvlrtQ&oe=664634D6',
            lastMsg:'You: Na re dosto'


        },
        {
            phoneNo:'9',
            Fname:'Supriya',
            Lname:'Mondal',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/423583068_807409174530843_8470573267908442207_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pwbPAkXgfmEQ7kNvgF3dWSD&_nc_ht=scontent.fccu20-1.fna&oh=00_AYAZEYx2XXLUZ6KQBnYoqyUKG49ulbEW_7-i30o21fgARA&oe=6646181D',
            lastMsg:'You: Hmmm'


        },
        {
            phoneNo:'10',
            Fname:'Souvik',
            Lname:'Das',
            imageUri:'https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/429532072_427031199996896_6272276281025612531_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1BpFJPGasZ4Q7kNvgHIOHYH&_nc_ht=scontent.fccu20-1.fna&oh=00_AYCD_XQgxyb96t0jSxI0WMWHJIWRLed8au_zinIVWY_lJA&oe=66463E1F',
            lastMsg:'sob thik'


        },
    ]
    return(
        <View>
            <Text style={styles.userIconHeader}>
                Messages
            </Text>
            <ScrollView horizontal={true}
            style={styles.navUsers}>
            {persons.map((items)=>(
                <View key={items.phoneNo}
                style={[styles.userIcons,styles.userIconElevation]}
                >
                    <Image
                    source={{
                        uri:items.imageUri
                    }}
                    
                    style={styles.userImage}/>
                    <Text style={styles.userName}>{items.Fname}</Text>

                </View>
            ))}
            </ScrollView>
            
            <ScrollView
            scrollEnabled = {true}
            style={styles.navUsers}>
            {personsChat.map((items)=>(
                <View key={items.phoneNo}
                style={[styles.chatStatus,styles.userIconElevation]}
                >
                    <Image
                    source={{
                        uri:items.imageUri
                    }}
                    
                    style={styles.chatUserImage}/>
                    <View>
                    <Text style={styles.chatStatusUserName}>{items.Fname} {items.Lname}</Text>
                    <Text style={styles.userLastMsg}>{items.lastMsg}</Text>
                    </View>


                </View>
                
            ))}
            </ScrollView>
        </View>
    )
}

export default ChatPersons


const styles = StyleSheet.create({
    userIconHeader:{
        fontSize:26,
        fontWeight:'bold',
        padding:10,
        color:'#000'

    },
    userIconElevation:{
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowOpacity:0.5,
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        
    },
    navUsers:{
        paddingTop:8,
    },
    userIcons:{
        width:80,
        height:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
    },
    userName:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:8,
    },

    chatStatus:{
        flex:1,
        flexDirection:'row',
        padding:12,

    },
    chatUserImage:{
        width:50,
        height:50,
        borderRadius:50/2,
        paddingTop:8,
    },
    chatStatusUserName:{
        paddingLeft:8,
        fontSize:18,
        color:'#000',
        fontWeight:'400',

    },
    userLastMsg:{
        paddingLeft:8,
        fontSize:14,
        color:'#000',
        fontWeight:'300',
        flexDirection:'column',
    },
})