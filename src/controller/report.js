import Report from '../model/report';

class ReportController{
    static async submitReport(req, res){
        const report = await Report.findOne({
     
                days:req.body.days,
                date: req.body.date,
                faculty:req.body.faculty,
                level:req.body.level
           
        });
        if(report) return res.status(400).json({error:'The report have been sumbitted before'});

        const newReport = new Report({
           
            school:req.body.school,
            faculty:req.body.faculty,
            level:req.body.level,
            studentsNumber: req.body.studentsNumber,
            days:req.body.days,
            date:req.body.date,
           body:{
            hours:req.body.hours,
            module:req.body.module,
            component:req.body.component,
            activity: req.body.activity,
            lecturer:req.body.lecturer,
            observation:req.body.observation
            }
        });
        try{
            const reported = await newReport.save();
            return res.status(200).json({msg:'Report submitted successfully', reported});
        }catch(err){
            return res.status(400).json({error:err.message});
        }
    };

    static async searchReport(req, res){
        try{
            const searchedRprt = await Report.find({
                $or:[
                    {faculty:req.body.faculty},
                    {level:req.body.level}
                ]
        });

        if(searchedRprt.length === 0) return res.status(400).json({error:'No such report in DB'});
       return res.status(200).json({searchedRprt})
    }catch(error){
        return res.status(500).json({error:'Internal error'})
    }
    };

    static async viewReports(req, res){
        try{
            const allReports = await Report.find();
            if(allReports.length === 0) return res.status(400).send({error:'No reports found'})
            res.status(200).json(allReports);
        }catch(error){
            return res.status(500).json({error:'Internal error'})
        }
    }
}

export default ReportController;