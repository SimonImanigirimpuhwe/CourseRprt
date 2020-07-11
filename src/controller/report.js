import Report from '../model/report';

class ReportController{
    static async submitReport(req, res){
        const report = await Report.findOne({
     
                days:req.body.days,
                date: req.body.date,
                faculty:req.body.faculty,
                level:req.body.level
           
        });
        if(report) return res.status(400).json({msg:'The report have been sumbitted before'});

        const newReport = new Report({
           
            school:req.body.school,
            faculty:req.body.faculty,
            level:req.body.level,
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
            return res.status(200).send({reported});
        }catch(err){
            return res.status(400).json({msg:err.message});
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

        if(searchedRprt.length === 0) return res.status(400).json({msg:'No such report in DB'});
        res.status(200).send({searchedRprt})
    }catch(err){
        return res.status(500).json({err:'Internal error'})
    }
    };

    static async viewReports(req, res){
        try{
            const allReport = await Report.find();
            if(allReport.length === 0) return res.status(400).send({msg:'No reports found'})
            res.status(200).json({allReport});
        }catch(err){
            return res.status(500).send({msg:'Internal error'})
        }
    }
}

export default ReportController;