import User from "../models/users.js";
import Agent from "../models/agents.js";

export const setupUser = async(req , res) =>{
    try{
        const {name , phone , dno , street, city, pincode} = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "No profile picture uploaded" });
        }
        const userId = req.user.userId;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        user.name = name;
        user.phone = phone;
        user.address = {dno, street, city, pincode};
        user.profilePicture = req.file.path;
        await user.save();
        res.status(201).json({message: "User updated successfully"});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}

export const setupAgent = async(req, res) =>{
    try{
        const {name, phone, dno, street, city, pincode , panCard , adhaarNumber} = req.body;
        const agentId = req.agent.id;
        const agent = await Agent.findById(agentId);
        if(!agent){
            return res.status(404).json({message: "Agent not found"});
        }
        agent.name = name;
        agent.phone = phone;
        agent.address = {dno, street, city, pincode};
        agent.panCard = panCard;
        agent.aadharNumber = adhaarNumber;
        agent.profilePicture = req.file.path;
        await agent.save();
        res.status(201).json({message: "Agent updated successfully"});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}