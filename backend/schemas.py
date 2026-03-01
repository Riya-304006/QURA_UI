from pydantic import BaseModel, ConfigDict
from datetime import datetime
from enum import Enum
from typing import Optional

class PriorityEnum(str, Enum):
    normal = "Normal"
    emergency = "Emergency"

class PatientCreate(BaseModel):
    name: str
    priority: PriorityEnum

class PatientResponse(BaseModel):
    id: int
    name: str
    priority: str
    arrival_time: datetime
    status: str
    position: Optional[int] = None
    estimated_wait_time: Optional[int] = None

    model_config = ConfigDict(from_attributes=True)

class PatientComplete(BaseModel):
    patient_id: int
